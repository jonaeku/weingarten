import ContentCardLeft from "./ContentCardLeft";
import ContentCardRight from "./ContentCardRight";

const ContentCard = ({ pictureLeft, heading, text, tel, picture }) => {
    return (
        <div>
            {pictureLeft ? (
                <ContentCardLeft heading={heading} text={text} picture={picture} />
                ) : (
                <ContentCardRight heading={heading} text={text} tel={tel} picture={picture} />
            )}
        </div>
    );
}

export default ContentCard;