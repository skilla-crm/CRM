import { ReactComponent as IconClose } from "@/public/icons/iconClose.svg";
import s from "./CustomToast.module.scss";
import './index.css';
import classNames from "classnames";

const CustomToast = ({ closeToast, message, icon, type }) => {
  const typeClassMap = {
    error: s.notification_error,
    success: s.notification_success,
  };
  return (
    <div className={classNames(s.notification, typeClassMap[type])}>
      <div className={`${s.line} ${type === "error" ? s.lineError : ""}`} />
      {icon && <div className={s.icon}>{icon}</div>}
      <p>{message}</p>
      <button className={s.close} onClick={closeToast}>
        <IconClose />
      </button>
    </div>
  );
};

export default CustomToast;
