import Link from 'next/link';

const CustomHeading = ({ hedName, actionLink, classes }) => {
    return (
        <div className={classes}>
            {
                actionLink ? <Link
                    href={actionLink ? actionLink : ''}
                    className={classes}
                >
                    {hedName}
                </Link> : <span>{hedName}</span>
            }
        </div>

    )
}
export default CustomHeading