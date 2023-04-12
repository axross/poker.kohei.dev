import { Dialog, Transition } from "@headlessui/react";
import { Header } from "components/header";
import { MenuIcon } from "components/icons/menu-icon";
import { XIcon } from "components/icons/x-icon";
import { Navigation, NavigationProps } from "components/navigation";
import { motion } from "framer-motion";
import { createContext, FC, Fragment, useContext } from "react";
import { create } from "zustand";
import { PageLinkGroup, TopLevelLink } from "~/models/navigation";

interface MobileNavigationStoreState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const IsInsideMobileNavigationContext = createContext(false);

export function useIsInsideMobileNavigation() {
  return useContext(IsInsideMobileNavigationContext);
}

export const useMobileNavigationStore = create<MobileNavigationStoreState>(
  (set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  })
);

export interface MobileNavigationProps {
  topLevelLinks: TopLevelLink[];
  pageLinkGroups: PageLinkGroup[];
}

export const MobileNavigation: FC<MobileNavigationProps> = ({
  topLevelLinks,
  pageLinkGroups,
}) => {
  const isInsideMobileNavigation = useIsInsideMobileNavigation();
  const { isOpen, toggle, close } = useMobileNavigationStore();
  const ToggleIcon = isOpen ? XIcon : MenuIcon;

  return (
    <IsInsideMobileNavigationContext.Provider value={true}>
      <button
        type="button"
        className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-gray-950/5 dark:hover:bg-white/5"
        aria-label="Toggle navigation"
        onClick={toggle}
      >
        <ToggleIcon className="w-2.5 text-gray-900 dark:text-white" />
      </button>

      {!isInsideMobileNavigation && (
        <Transition.Root show={isOpen} as={Fragment}>
          <Dialog onClose={close} className="fixed inset-0 z-50 lg:hidden">
            <Transition.Child
              as={Fragment}
              enter="duration-300 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-200 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 top-14 bg-gray-400/20 backdrop-blur-sm dark:bg-black/40" />
            </Transition.Child>

            <Dialog.Panel>
              <Transition.Child
                as={Fragment}
                enter="duration-300 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="duration-200 ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Header
                  topLevelLinks={topLevelLinks}
                  pageLinkGroups={pageLinkGroups}
                />
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter="duration-500 ease-in-out"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="duration-500 ease-in-out"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <motion.div
                  layoutScroll
                  className="fixed bottom-0 left-0 top-14 w-full overflow-y-auto bg-white px-4 pb-4 pt-6 shadow-lg shadow-gray-900/10 ring-1 ring-gray-900/7.5 dark:bg-gray-950 dark:ring-gray-800 min-[416px]:max-w-sm sm:px-6 sm:pb-10"
                >
                  <Navigation
                    topLevelLinks={topLevelLinks}
                    pageLinkGroups={pageLinkGroups}
                  />
                </motion.div>
              </Transition.Child>
            </Dialog.Panel>
          </Dialog>
        </Transition.Root>
      )}
    </IsInsideMobileNavigationContext.Provider>
  );
};
