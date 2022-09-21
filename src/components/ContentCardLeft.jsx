import styles from'../styles/contentCard.module.css';

const ContentCardLeft = ({ heading, text, textNextLine, picture }) => {
    return (
        <div className={styles.contentCardContainerRight}>
            <img className={styles.contentCardPicture} src={picture} alt={`${picture}`} />
            <div>
                <h2 className={`${styles.contentCardHeader} sm:ml-10`}>{heading}</h2>
                <p className={`${styles.contentCardText} sm:ml-10 pb-3`}>{text}</p>
                <p className="font-text text-[20px] text-center pb-[20px] sm:pl-[2.5rem] sm:text-justify">{textNextLine}</p>
            </div>
        </div>
    );
}

export default ContentCardLeft;