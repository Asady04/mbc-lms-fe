"use client";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
  Image,
  Link,
  Tooltip,
  Avatar,
  AvatarGroup,
  Accordion,
  AccordionItem,
} from "@heroui/react";

export default function CourseSidebar(props:any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="fixed left-0 top-40 z-50">
      <Button
        isIconOnly
        className="rounded-l-none bg-sky-600 text-white"
        variant="solid"
        size="lg"
        onPress={onOpen}
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <Drawer
        hideCloseButton
        backdrop="blur"
        classNames={{
          base: "data-[placement=right]:sm:m-2 data-[placement=left]:sm:m-2  rounded-medium",
        }}
        placement="left"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="absolute top-0 inset-x-0 z-50 flex flex-row gap-2 px-2 py-2 border-b border-default-200/50 justify-between bg-content1/50 backdrop-saturate-150 backdrop-blur-lg">
                <div className="flex justify-end w-full">
                  <Tooltip content="Close">
                    <Button
                      isIconOnly
                      className="text-default-400"
                      variant="light"
                      onPress={onClose}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </Button>
                  </Tooltip>
                </div>
              </DrawerHeader>
              <DrawerBody className="pt-16">
                <Accordion variant="splitted" selectionMode="multiple">
                  <AccordionItem key="1" aria-label="Materi 1" title="Materi 1">
                    <div className="text-sm space-y-2 pb-3">
                      <div className="hover:underline decoration-cyan-500 text-default-600 hover:text-default-800">TP Minggu 1</div>
                      <div className="hover:underline decoration-cyan-500 text-default-600 hover:text-default-800">TA Minggu 1</div>
                    </div>
                  </AccordionItem>
                  <AccordionItem key="2" aria-label="Materi 2" title="Materi 2">
                  <div className="text-sm space-y-2 pb-3">
                      <div className="hover:underline decoration-cyan-500 text-default-600 hover:text-default-800">TP Minggu 2</div>
                      <div className="hover:underline decoration-cyan-500 text-default-600 hover:text-default-800">TA Minggu 2</div>
                    </div>
                  </AccordionItem>
                  <AccordionItem key="3" aria-label="Materi 3" title="Materi 3">
                  <div className="text-sm space-y-2 pb-3">
                      <div className="hover:underline decoration-cyan-500 text-default-600 hover:text-default-800">TP Minggu 3</div>
                      <div className="hover:underline decoration-cyan-500 text-default-600 hover:text-default-800">TA Minggu 3</div>
                    </div>
                  </AccordionItem>
                </Accordion>
              </DrawerBody>
              <DrawerFooter className="flex flex-col gap-1">
                <Link
                  className="text-default-400"
                  href="mailto:hello@nextui.org"
                  size="sm"
                >
                  Contact the host
                </Link>
                <Link
                  className="text-default-400"
                  href="mailto:hello@nextui.org"
                  size="sm"
                >
                  Report event
                </Link>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}
