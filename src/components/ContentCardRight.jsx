import styles from '../styles/contentCard.module.css';

const ContentCardRight = ({ heading, text, textNextLine, tel, picture }) => {
    return (
        <div className={styles.contentCardContainer}>
            <div className="sm:mr-10">
                <h2 className={`${styles.contentCardHeader}`}>{heading}</h2>
                <p className={`${styles.contentCardText}`}>{text}</p>
                <p className="font-text text-[20px] text-center pb-[20px] sm:text-justify">{textNextLine}</p>
                {tel && (
                    <p className={styles.contentCardSubText}>Telefon: <a href="tel:063215763330">06321 5763330</a></p>
                )}
            </div>
            <img className={styles.contentCardPicture} src={picture} alt={`${picture}`}/>
        </div>
    );
}

export default ContentCardRight;