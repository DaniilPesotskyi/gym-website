import css from "./index.module.css";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import Section from "@/components/Section/Section";
import Heading from "@/components/Heading/Heading";

export type ContactsProps = SliceComponentProps<Content.ContactsSlice>;

const Contacts = ({ slice }: ContactsProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={css.section}
    >
      <div className={css.container}>
        <Heading field={slice.primary.heading} position="left" />
        <ul className={css.list}>
          {slice.items.map((i, index) => (
            <li key={index}>
              <a
                href={`${i.icon === "Number" ? `tel:${i.contact?.trim()}` : `mailto:${i.contact?.trim()}`}`}
                className={css.item}
              >
                {i.icon === "Email" && <MailIcon className={css.icon} />}
                {i.icon === "Location" && <LocationIcon className={css.icon} />}
                {i.icon === "Number" && <PhoneIcon className={css.icon} />}
                {i.contact}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={css.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169324.38910449122!2d34.83555137202985!3d48.462408528734436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe303fd08468f%3A0xa1cf3d5f2c11aba!2z0JTQvdGW0L_RgNC-LCDQlNC90ZbQv9GA0L7Qv9C10YLRgNC-0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNDkwMDA!5e0!3m2!1suk!2sua!4v1708800536645!5m2!1suk!2sua"
          width="100%"
          height="100%"
          style={{ border: "15px" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Section>
  );
};

export default Contacts;

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="30"
      fill="none"
    >
      <path d="M9.28 7h16.44c.88 0 1.727.282 2.367.789.64.507 1.024 1.2 1.074 1.936l.006.164V20.11c0 .738-.337 1.448-.942 1.984-.605.537-1.431.859-2.31.9L25.72 23H9.28c-.88 0-1.727-.282-2.367-.789-.64-.507-1.025-1.2-1.074-1.936l-.006-.164V9.89c0-.738.337-1.448.942-1.984.604-.537 1.431-.859 2.31-.9L9.28 7zm18.296 5.249l-9.71 4.231a.94.94 0 01-.615.042l-.118-.042-9.709-4.231v7.862c0 .39.175.767.49 1.054.316.287.75.464 1.213.496l.153.006h16.44c.466 0 .915-.147 1.257-.412.343-.265.554-.628.592-1.017l.007-.127V12.25zM25.72 8.333H9.28c-.466 0-.914.147-1.257.412-.343.264-.554.627-.592 1.016l-.007.128v.857l10.076 4.39 10.076-4.39v-.857c0-.39-.176-.767-.491-1.054a2.012 2.012 0 00-1.214-.496l-.151-.006z"></path>
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="none"
    >
      <path d="M17.5 9.479a3.646 3.646 0 110 7.292 3.646 3.646 0 010-7.292zm0-6.562a10.209 10.209 0 0110.208 10.208c0 7.656-10.208 18.958-10.208 18.958S7.292 20.781 7.292 13.125A10.208 10.208 0 0117.5 2.916zm0 2.916a7.292 7.292 0 00-7.292 7.292c0 1.458 0 4.375 7.292 14.16 7.292-9.785 7.292-12.702 7.292-14.16A7.292 7.292 0 0017.5 5.833z"></path>
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="none"
    >
      <path d="M6.9 20.736l5.222-2.34.014-.006a1.774 1.774 0 011.682.155.91.91 0 01.083.062l2.698 2.3c1.709-.83 3.473-2.582 4.303-4.268l-2.303-2.74a1.22 1.22 0 01-.063-.084 1.774 1.774 0 01-.146-1.67v-.013l2.346-5.23a1.774 1.774 0 011.842-1.055A6.235 6.235 0 0128 12.04C28 20.84 20.84 28 12.04 28a6.236 6.236 0 01-6.194-5.422A1.773 1.773 0 016.9 20.736zm5.14 5.49A14.202 14.202 0 0026.227 12.04a4.455 4.455 0 00-3.865-4.433v.013l-2.328 5.21 2.291 2.741a.684.684 0 01.064.085 1.774 1.774 0 01.11 1.74c-1.004 2.054-3.073 4.108-5.15 5.111a1.774 1.774 0 01-1.745-.126.913.913 0 01-.082-.062l-2.694-2.299-5.21 2.333h-.011a4.456 4.456 0 004.433 3.874z"></path>
    </svg>
  );
}
