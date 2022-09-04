import styles from'../styles/contentCard.module.css';

const ContentCardLeft = ({ heading, text, picture }) => {
    return (
        <div className={styles.contentCardContainerRight}>
            <img className={styles.contentCardPicture} src={picture} alt={`${picture}`} />
            <div>
                <h2 className={`${styles.contentCardHeader} sm:ml-10`}>{heading}</h2>
                <p className={`${styles.contentCardText} sm:ml-10`}>{text}</p>
            </div>
        </div>
    );
}

export default ContentCardLeft;