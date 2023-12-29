import Link from "next/link"

const CustomImage = ({ src, actionLink, classes, alt }) => {
    return (
        <div className={classes}>
            {actionLink ? <Link href={actionLink} >
                <img src={src} alt={alt} />
            </Link> : <img src={src} alt={alt} />
            }
        </div>
    )
}
export default CustomImage
