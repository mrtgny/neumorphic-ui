import {notification, notificationPusher as _notificationPusher} from "@reactivers/generic-ui";
import {takeIf} from "@reactivers/hooks";

const notificationPusher = props => {
    const {
        className: _className,
        onClick,
    } = props;

    let className = `${takeIf(onClick, "neumorphic-clickable ")} neumorphic-outset`;
    if (_className) className += _className;
    _notificationPusher({...props, className})
}

notification.success = props => {
    notificationPusher({...props, type: "success"})
}
notification.error = props => {
    notificationPusher({...props, type: "error"})
}
notification.warning = props => {
    notificationPusher({...props, type: "warning"})
}
notification.info = props => {
    notificationPusher({...props, type: "info"})
}

export default notification;
