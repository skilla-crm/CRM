import IconClose from "@/public/icons/notification/iconClose.svg";
import s from "./CustomToast.module.scss";
import './index.css';
import classNames from "classnames";

const CustomToast = ({ closeToast, message, Icon, type, buttonClose, person }) => {
  const typeClassMap = {
    error: s.notification_error,
    success: s.notification_success,
  };
  return (
    <div className={classNames(s.notification, typeClassMap[type])}>
      {/*   <div className={`${s.line} ${type === "error" ? s.lineError : ""}`} /> */}
      {Icon && <div className={s.icon}><Icon/></div>}
      <div className={s.block}>
        {person && <span>{person?.name} {person?.surname}</span>}
        <p>{message.slice(0, 250)} {message.length > 250 ? '...' : ''}</p>
      </div>

      {buttonClose && <button className={s.close} onClick={closeToast}>
        <IconClose />
      </button>}
    </div>
  );
};

export default CustomToast;
