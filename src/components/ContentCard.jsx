import ContentCardLeft from "./ContentCardLeft";
import ContentCardRight from "./ContentCardRight";
import styles from'../styles/contentCard.module.css';

const ContentCard = ({ pictureLeft, heading, text, picture }) => {
    return (
        <div className="my-8">
            {pictureLeft ? (
                <ContentCardLeft heading={heading} text={text} picture={picture} />
            ) : (
                <ContentCardRight heading={heading} text={text} picture={picture} />
            )}
        </div>
    );
}

export default ContentCard;