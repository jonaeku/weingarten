import styles from'../styles/contentCard.module.css';

const ContentCardLeft = ({ heading, text, picture }) => {
    return (
        <div>
            <img src={picture} />
            <div>
                <h2>{heading}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default ContentCardLeft;