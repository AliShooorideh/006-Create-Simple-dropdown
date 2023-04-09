import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
interface Iitem {
  data: Array<{ title: string }>;
  isOpen: boolean;
  setIsOpen: any;
  defaultItem: string;
  setDefaultItem: any;
}

export default function DropDown(item: Iitem) {
  return (
    <div className="flex w-1/4 flex-col rounded-lg border bg-white">
      <motion.header
        className="flex items-center justify-between px-5 py-2"
        initial={false}
        onClick={() => item.setIsOpen(!item.isOpen)}
      >
        <div className="flex items-center space-x-4 space-x-reverse">
          <span>{item.defaultItem}</span>
        </div>
        <motion.div
          className="flex"
          animate={{
            rotate: item.isOpen ? 180 : 0,
          }}
        >
          <ChevronDownIcon
            className={`w-3 ${item.isOpen ? "text-blue-500" : "text-gray-500"}`}
          />
        </motion.div>
      </motion.header>
      <AnimatePresence initial={false}>
        {item.isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="flex flex-col space-y-4 p-4 ">
              {item.data.map((ele: any) => (
                <span
                  className={`${
                    ele.title === item.defaultItem && ", text-base font-black"
                  }`}
                  onClick={() => {
                    item.setIsOpen(false);
                    item.setDefaultItem(ele.title);
                  }}
                >
                  {ele.title}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
