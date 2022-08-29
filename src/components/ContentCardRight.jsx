import styles from'../styles/contentCard.module.css';

const ContentCardRight = ({ heading, text, picture }) => {
    return (
        <div className={styles.contentCardContainer}>
            <div>
                <h2 className={styles.contentCardHeader}>{heading}</h2>
                <p className={styles.contentCardText}>{text}</p>
            </div>
            <img className={styles.contentCardPicture} src={picture} />
        </div>
    );
}

export default ContentCardRight;