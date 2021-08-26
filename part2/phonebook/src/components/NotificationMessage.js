import '../index.css'

const NotificationMessage = ({ notification, notificationType }) => {

    if (notification === null) {
        return null
    }
    console.log(notificationType)
    return (
        <div className={notificationType}>
            {notification}
        </div>
    )
}

export default NotificationMessage;