import css from './cta.scss'
import Link from 'next/link'
 
const Cta = (props) => {
    const {href, callback, children} = props;
    return href ? (
        <Link href={href}>
            <a className={css.superCta}>{children}</a>
        </Link>
    ) : (
        <button classname={css.superCta} onClick={callback}>
            {children}
        </button>
    )
}

export default Cta