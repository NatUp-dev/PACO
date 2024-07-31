import Link from "next/link";
import React from "react";
import {
  SiFacebook,
  SiLinkedin,
  SiX,
  SiYoutube,
  SiInstagram,
} from "@icons-pack/react-simple-icons";

export default function Footer() {
  return (
    <div className="w-full px-7 pt-0.5 pb-2 ">
      <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-300 text-gray-500">
        <div className=" font-normal text-sm py-3">
          <div>
            © Copyright{" "}
            <a className="underline" href="https://natup.coop">
              NatUp
            </a>{" "}
            - 2024 - Tous droits réservés
          </div>
        </div>
        <div className="flex items-center justify-between gap-2.5">
          <Link
            href={"https://fr.linkedin.com/company/groupe-natup"}
            className="p-1 rounded-full hover:bg-gray-50"
          >
            <SiLinkedin className="text-gray-500" size={14} />
          </Link>
          <Link
            href={"https://www.facebook.com/profil.php?id=1000057134512535"}
            className="p-1 rounded-full hover:bg-gray-50"
          >
            <SiFacebook className="text-gray-500" size={14} />
          </Link>
          <Link
            href={"https://www.instagram.com/natup_officiel/"}
            className="p-1 rounded-full hover:bg-gray-50"
          >
            <SiInstagram className="text-gray-500" size={14} />
          </Link>
          <Link
            href={"https://twitter.com/NatUp_groupe"}
            className="p-1 rounded-full hover:bg-gray-50"
          >
            <SiX className="text-gray-500" size={14} />
          </Link>
          <Link
            href={"https://www.youtube.com/@NatUp76130"}
            className="p-1 rounded-full hover:bg-gray-50"
          >
            <SiYoutube className="text-gray-500" size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
