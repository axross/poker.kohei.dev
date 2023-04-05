import { Tab } from "@headlessui/react";
import {
  ButtonHTMLAttributes,
  Children,
  FC,
  HTMLAttributes,
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";
import { create } from "zustand";
import { Tag } from "~/components/tag";
import { ClipboardIcon } from "~/components/icons/clipboard-icon";

const languageNames = {
  js: "JavaScript",
  ts: "TypeScript",
  javascript: "JavaScript",
  typescript: "TypeScript",
  php: "PHP",
  python: "Python",
  ruby: "Ruby",
  go: "Go",
};

function getPanelTitle({
  title,
  language,
}: {
  title: string;
  language: keyof typeof languageNames;
}) {
  return title ?? languageNames[language] ?? "Code";
}

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  code: string;
}

const CopyButton: FC<CopyButtonProps> = ({ code, className, ...props }) => {
  const [copyCount, setCopyCount] = useState(0);
  const copied = copyCount > 0;

  useEffect(() => {
    if (copyCount > 0) {
      const timeout = setTimeout(() => setCopyCount(0), 1000);

      return () => clearTimeout(timeout);
    }
  }, [copyCount]);

  return (
    <button
      type="button"
      className={twMerge(
        "group/button absolute right-4 top-3.5 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100",
        copied
          ? "bg-emerald-400/10 ring-1 ring-inset ring-emerald-400/20"
          : "bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5",
        className
      )}
      onClick={() => {
        window.navigator.clipboard.writeText(code).then(() => {
          setCopyCount((count) => count + 1);
        });
      }}
      {...props}
    >
      <span
        aria-hidden={copied}
        className={twMerge(
          "pointer-events-none flex items-center gap-0.5 text-gray-400 transition duration-300",
          copied && "-translate-y-1.5 opacity-0"
        )}
      >
        <ClipboardIcon className="h-5 w-5 fill-gray-500/20 stroke-gray-500 transition-colors group-hover/button:stroke-gray-400" />
        Copy
      </span>
      <span
        aria-hidden={!copied}
        className={twMerge(
          "pointer-events-none absolute inset-0 flex items-center justify-center text-emerald-400 transition duration-300",
          !copied && "translate-y-1.5 opacity-0"
        )}
      >
        Copied!
      </span>
    </button>
  );
};

interface CodePanelHeaderProps extends HTMLAttributes<HTMLElement> {
  tag: string;
  label: string;
}

const CodePanelHeader: FC<CodePanelHeaderProps> = ({
  tag,
  label,
  className,
  ...props
}) => {
  if (!tag && !label) {
    return null;
  }

  return (
    <div
      className={twMerge(
        "flex h-9 items-center gap-2 border-y border-b-white/7.5 border-t-transparent bg-gray-900 bg-white/2.5 px-4 dark:border-b-white/5 dark:bg-white/1",
        className
      )}
      {...props}
    >
      {tag && (
        <div className="dark flex">
          <Tag variant="small">{tag}</Tag>
        </div>
      )}
      {tag && label && (
        <span className="h-0.5 w-0.5 rounded-full bg-gray-500" />
      )}
      {label && (
        <span className="font-mono text-xs text-gray-400">{label}</span>
      )}
    </div>
  );
};

interface CodePanelProps extends HTMLAttributes<HTMLElement> {
  tag?: string;
  label?: string;
  code?: string;
}

const CodePanel: FC<CodePanelProps> = ({
  tag,
  label,
  code,
  className,
  children,
  ...props
}) => {
  let child = Children.only(children) as ReactElement<{
    tag: string;
    label: string;
    code: string;
  }>;

  return (
    <div className={twMerge("group dark:bg-white/2.5", className)} {...props}>
      <CodePanelHeader
        tag={child.props.tag ?? tag}
        label={child.props.label ?? label}
      />
      <div className="relative">
        <pre className="overflow-x-auto p-4 text-xs text-white">{children}</pre>
        <CopyButton code={child.props.code ?? code} />
      </div>
    </div>
  );
};

interface CodeGroupHeader extends HTMLAttributes<HTMLElement> {
  title: string;
  selectedIndex?: number;
}

const CodeGroupHeader: FC<CodeGroupHeader> = ({
  title,
  children,
  selectedIndex,
  className,
  ...props
}) => {
  let hasTabs = Children.count(children) > 1;

  if (!title && !hasTabs) {
    return null;
  }

  return (
    <div
      className={twMerge(
        "flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-gray-700 bg-gray-800 px-4 dark:border-gray-800 dark:bg-transparent",
        className
      )}
      {...props}
    >
      {title && (
        <h3 className="mr-auto pt-3 text-xs font-semibold text-white">
          {title}
        </h3>
      )}
      {hasTabs && (
        <Tab.List className="-mb-px flex gap-4 text-xs font-medium">
          {Children.map(children, (child, childIndex) => (
            <Tab
              className={twMerge(
                "border-b py-3 transition focus:[&:not(:focus-visible)]:outline-none",
                childIndex === selectedIndex
                  ? "border-emerald-500 text-emerald-400"
                  : "border-transparent text-gray-400 hover:text-gray-300"
              )}
            >
              {getPanelTitle((child as ReactElement).props)}
            </Tab>
          ))}
        </Tab.List>
      )}
    </div>
  );
};

type CodeGroupPanelsProps = CodePanelProps;

const CodeGroupPanels: FC<CodeGroupPanelsProps> = ({ children, ...props }) => {
  let hasTabs = Children.count(children) > 1;

  if (hasTabs) {
    return (
      <Tab.Panels>
        {Children.map(children, (child) => (
          <Tab.Panel>
            <CodePanel {...props}>{child}</CodePanel>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    );
  }

  return <CodePanel {...props}>{children}</CodePanel>;
};

function usePreventLayoutShift() {
  const positionRef = useRef<HTMLElement>();
  const rafRef = useRef<number>();

  useEffect(() => {
    return () => {
      if (rafRef.current !== undefined) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return {
    positionRef,
    preventLayoutShift: (callback: () => void) => {
      const initialTop = positionRef.current!.getBoundingClientRect().top;

      callback();

      rafRef.current = window.requestAnimationFrame(() => {
        const newTop = positionRef.current!.getBoundingClientRect().top;

        window.scrollBy(0, newTop - initialTop);
      });
    },
  };
}

interface PreferredLanguageStoreState {
  preferredLanguages: string[];
  addPreferredLanguage: (language: string) => void;
}

const usePreferredLanguageStore = create<PreferredLanguageStoreState>(
  (set) => ({
    preferredLanguages: [],
    addPreferredLanguage: (language) =>
      set((state) => ({
        preferredLanguages: [
          ...state.preferredLanguages.filter(
            (preferredLanguage) => preferredLanguage !== language
          ),
          language,
        ],
      })),
  })
);

function useTabGroupProps(availableLanguages: string[]) {
  let { preferredLanguages, addPreferredLanguage } =
    usePreferredLanguageStore();
  let [selectedIndex, setSelectedIndex] = useState(0);
  let activeLanguage = [...availableLanguages].sort(
    (a, z) => preferredLanguages.indexOf(z) - preferredLanguages.indexOf(a)
  )[0];
  let languageIndex = availableLanguages.indexOf(activeLanguage);
  let newSelectedIndex = languageIndex === -1 ? selectedIndex : languageIndex;
  if (newSelectedIndex !== selectedIndex) {
    setSelectedIndex(newSelectedIndex);
  }

  let { positionRef, preventLayoutShift } = usePreventLayoutShift();

  return {
    as: "div",
    ref: positionRef,
    selectedIndex,
    onChange: (newSelectedIndex: number) => {
      preventLayoutShift(() =>
        addPreferredLanguage(availableLanguages[newSelectedIndex])
      );
    },
  };
}

const CodeGroupContext = createContext(false);

export interface CodeGroupProps extends CodeGroupPanelsProps {
  title: string;
  children: ReactElement | ReactElement[];
}

export const CodeGroup: FC<CodeGroupProps> = ({
  children,
  title,
  ...props
}) => {
  const languages = Children.map(children, (child) =>
    getPanelTitle(child.props)
  );
  const tabGroupProps = useTabGroupProps(languages);
  const hasTabs = Children.count(children) > 1;
  const Container = hasTabs ? Tab.Group : "div";
  const containerProps = hasTabs ? tabGroupProps : {};
  const headerProps = hasTabs
    ? { selectedIndex: tabGroupProps.selectedIndex }
    : {};

  return (
    <CodeGroupContext.Provider value={true}>
      <Container
        {...containerProps}
        className="not-prose my-6 overflow-hidden rounded-2xl bg-gray-900 shadow-md dark:bg-gray-950 dark:ring-1 dark:ring-white/10"
      >
        <CodeGroupHeader title={title} {...headerProps}>
          {children}
        </CodeGroupHeader>

        <CodeGroupPanels {...props}>{children}</CodeGroupPanels>
      </Container>
    </CodeGroupContext.Provider>
  );
};

export interface CodeProps extends HTMLAttributes<HTMLElement> {
  children: string;
}

export const Code: FC<CodeProps> = ({ children, ...props }) => {
  let isGrouped = useContext(CodeGroupContext);

  if (isGrouped) {
    return <code {...props} dangerouslySetInnerHTML={{ __html: children }} />;
  }

  return <code {...props}>{children}</code>;
};

export type PreProps = any;

export const Pre: FC<PreProps> = ({ children, ...props }) => {
  let isGrouped = useContext(CodeGroupContext);

  if (isGrouped) {
    return children;
  }

  return <CodeGroup {...props}>{children}</CodeGroup>;
};
