import ContentCardLeft from "./ContentCardLeft";
import ContentCardRight from "./ContentCardRight";

const ContentCard = ({ pictureLeft, heading, text, textNextLine, tel, picture }) => {
    return (
        <div>
            {pictureLeft ? (
                <ContentCardLeft heading={heading} text={text} textNextLine={textNextLine} picture={picture} />
                ) : (
                <ContentCardRight heading={heading} text={text} textNextLine={textNextLine} tel={tel} picture={picture} />
            )}
        </div>
    );
}

export default ContentCard;