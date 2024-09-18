import { Link } from "@remix-run/react";
import Github from "./icons/GitHub";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className="text-white w-full mt-auto flex flex-col items-center justify-between px-5 pt-16 mb-10 md:px-10 mx-auto sm:flex-row">
      {/* Logo Link */}
      <Link to="/" className="text-xl font-black leading-none select-none logo">
        IMyself Mail Service
      </Link>

      {/* © 2024 Products of IMyself */}
      <a
        href="https://100769.xyz/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0"
      >
        © 2024 Products of IMyself
      </a>

      {/* Status Link (Visible on medium screens and above) */}
      <a
        href="https://status.100769.xyz"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 text-sm hover:text-gray-500 ml-1 hidden md:block"
      >
        · Status
      </a>

      {/* Navigation Links (Visible on small screens) */}
      <div className="flex items-center gap-3 mt-3 sm:ml-3 sm:mt-0 md:hidden text-sm text-gray-300">
        <Link to="/about">{t("About")}</Link>
        <Link to="/privacy">{t("Privacy")}</Link>
        <Link to="/terms">{t("Terms")}</Link>
        <a
          href="https://status.100769.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Status
        </a>
        <span>.</span>
      </div>

      {/* Social Links */}
      <div className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
        <a
          href="https://blog.lmyself.top/"
          target="_blank"
          rel="noopener noreferrer"
          title="Blog"
          className="text-gray-400 hover:text-gray-500 scale-125"
        >
          🌍
        </a>
        <a
          href="https://github.com/Shadownc/vmail"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
          className="text-gray-400 hover:text-gray-500"
        >
          <Github />
        </a>
      </div>
    </div>
  );
}
