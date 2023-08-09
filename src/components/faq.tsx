import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/shadcn/ui/accordion";
import React from "react";

export function Faq() {
  return (
    <div className=" mt-[51px] relative  ">   
    <img className=" absolute left-0  top-0"  src="/Group 16.svg" alt="svg" />
      <div className="max-w-[1440px] mx-24  mx-auto px-64 ">
      <Accordion
        type="single"
        collapsible
        className="my-px inline-flex w-full flex-col gap-x-16"
      >
        <div className="flex justify-center flex gap-[1em]">
          <img className="mt-[10px]"  src="/line 70.svg" alt="svg" />
          <h1 className="text-[40px] font-[700] ">FAQs</h1>
        </div>
        <AccordionItem className="py-2 mt-[72px] " value="item-1">
          <AccordionTrigger>How does URL shortening work?</AccordionTrigger>
          <AccordionContent>
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="py-2" value="item-2">
          <AccordionTrigger>
            Is it necessary to create an account to use the URL shortening
            service?
          </AccordionTrigger>
          <AccordionContent>
            No, you can access the basic feature without an account.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="py-2" value="item-3">
          <AccordionTrigger>
            Are the shortened links permanent? Will they expire?
          </AccordionTrigger>
          <AccordionContent>Yes. They do not expire</AccordionContent>
        </AccordionItem>
        <AccordionItem className="py-2" value="item-4">
          <AccordionTrigger>
            Are there any limitations on the number of URLs I can shorten?
          </AccordionTrigger>
          <AccordionContent>
            No, You can shorten as many as you need.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="py-2" value="item-5">
          <AccordionTrigger>
            Can I customize the shortened URLs to reflect my brand or content?
          </AccordionTrigger>
          <AccordionContent>Yes. You can.</AccordionContent>
        </AccordionItem>
        <AccordionItem className="py-2" value="item-6">
          <AccordionTrigger>
            Can I track the performance of my shortened URLs?
          </AccordionTrigger>
          <AccordionContent>
            Yes. There is analytics for you to track that.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="py-2" value="item-6">
          <AccordionTrigger>
          How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?
          </AccordionTrigger>
          <AccordionContent>
            Yes. There is analytics for you to track that.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="py-2" value="item-6">
          <AccordionTrigger>
            What is a QR code and what can it do?
          </AccordionTrigger>
          <AccordionContent>
            Yes. There is analytics for you to track that.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="py-2" value="item-6">
          <AccordionTrigger>
          Is there an API available for integrating the URL shortening service into my own applications or websites?
          </AccordionTrigger>
          <AccordionContent>
            Yes. There is analytics for you to track that.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
    <div>
      <img className="s absolute right-0  bottom-0"  src="/Group 17.svg" alt="svg" />
    </div>
    </div>
  );
}
