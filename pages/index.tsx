import AccordionBox from "@/components/AccordionBox";
import { motion } from "framer-motion";
import { useState } from "react";
export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const data = [
    {
      title: "item1",
    },
    {
      title: "item2",
    },
    {
      title: "item3",
    },
    {
      title: "item4",
    },
  ];
  const [defaultItem, setDefaultItem] = useState<string>(data[0].title);

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4">
      <AccordionBox
        data={data}
        isOpen={open}
        setIsOpen={setOpen}
        defaultItem={defaultItem}
        setDefaultItem={setDefaultItem}
      />
    </div>
  );
}
