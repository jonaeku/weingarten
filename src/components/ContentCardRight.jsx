import styles from '../styles/contentCard.module.css';

const ContentCardRight = ({ heading, text, tel, picture }) => {
    return (
        <div className={styles.contentCardContainer}>
            <div className="sm:mr-10">
                <h2 className={`${styles.contentCardHeader}`}>{heading}</h2>
                <p className={`${styles.contentCardText}`}>{text}</p>
                {tel && (
                    <p className={styles.contentCardSubText}>Telefon: <a href="tel:063215763330">06321 5763330</a></p>
                )}
            </div>
            <img className={styles.contentCardPicture} src={picture} alt={`${picture}`}/>
        </div>
    );
}

export default ContentCardRight;