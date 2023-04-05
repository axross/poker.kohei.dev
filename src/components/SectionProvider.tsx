import {
  FC,
  ReactNode,
  RefObject,
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { StoreApi, createStore, useStore } from "zustand";
import { remToPx } from "~/lib/remToPx";

interface SectionStoreState {
  sections: Section[];
  visibleSections: Section["id"][];
  setVisibleSections: (visibleSections: Section["id"][]) => void;
  registerHeading: (params: {
    id: Section["id"];
    ref: RefObject<any>;
    offsetRem: Section["offsetRem"];
  }) => void;
}

export interface Section {
  id: string;
  title: string;
  tag: string;
  headingRef: RefObject<HTMLElement>;
  offsetRem: number;
}

type SectionStoreApi = StoreApi<SectionStoreState>;

function createSectionStore(sections: Section[]) {
  return createStore<SectionStoreState>((set) => ({
    sections,
    visibleSections: [],
    setVisibleSections: (visibleSections) =>
      set((state) =>
        state.visibleSections.join() === visibleSections.join()
          ? {}
          : { visibleSections }
      ),
    registerHeading: ({ id, ref, offsetRem }) =>
      set((state) => {
        return {
          sections: state.sections.map((section) => {
            if (section.id === id) {
              return {
                ...section,
                headingRef: ref,
                offsetRem,
              };
            }
            return section;
          }),
        };
      }),
  }));
}

function useVisibleSections(sectionStore: SectionStoreApi) {
  let setVisibleSections = useStore(sectionStore, (s) => s.setVisibleSections);
  let sections = useStore(sectionStore, (s) => s.sections);

  useEffect(() => {
    function checkVisibleSections() {
      let { innerHeight, scrollY } = window;
      let newVisibleSections = [];

      for (
        let sectionIndex = 0;
        sectionIndex < sections.length;
        sectionIndex++
      ) {
        let { id, headingRef, offsetRem } = sections[sectionIndex];
        let offset = remToPx(offsetRem);
        let top = headingRef.current!.getBoundingClientRect().top + scrollY;

        if (sectionIndex === 0 && top - offset > scrollY) {
          newVisibleSections.push("_top");
        }

        let nextSection = sections[sectionIndex + 1];
        let bottom =
          (nextSection?.headingRef.current!.getBoundingClientRect().top ??
            Infinity) +
          scrollY -
          remToPx(nextSection?.offsetRem ?? 0);

        if (
          (top > scrollY && top < scrollY + innerHeight) ||
          (bottom > scrollY && bottom < scrollY + innerHeight) ||
          (top <= scrollY && bottom >= scrollY + innerHeight)
        ) {
          newVisibleSections.push(id);
        }
      }

      setVisibleSections(newVisibleSections);
    }

    let raf = window.requestAnimationFrame(() => checkVisibleSections());
    window.addEventListener("scroll", checkVisibleSections, { passive: true });
    window.addEventListener("resize", checkVisibleSections);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", checkVisibleSections);
      window.removeEventListener("resize", checkVisibleSections);
    };
  }, [setVisibleSections, sections]);
}

const SectionStoreContext = createContext<SectionStoreApi | null>(null);

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

export interface SectionProviderProps {
  sections: Section[];
  children?: ReactNode;
}

export const SectionProvider: FC<SectionProviderProps> = ({
  sections,
  children,
}) => {
  let [sectionStore] = useState(() => createSectionStore(sections));

  useVisibleSections(sectionStore);

  useIsomorphicLayoutEffect(() => {
    sectionStore.setState({ sections });
  }, [sectionStore, sections]);

  return (
    <SectionStoreContext.Provider value={sectionStore}>
      {children}
    </SectionStoreContext.Provider>
  );
};

export function useSectionStore<R>(selector: (state: SectionStoreState) => R) {
  const store = useContext(SectionStoreContext);

  if (store === null) {
    throw new Error(
      "useSectionStore() is called outside the context. Don't forget to wrap the tree with <SectionProvider>."
    );
  }

  return useStore<SectionStoreApi, R>(store, selector);
}
