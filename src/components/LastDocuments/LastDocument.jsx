import React from 'react';
import { ItemDocument } from './ItemDocument';
import useStyles from './LastDocument.styles';
import Theme from '../../theme/theme'

const LastDocument = () => {
    const classes = useStyles();
    return (
        <Theme>
            <div className={classes.container}>
                <section className={classes.Cheader}>
                    <p className={classes.header}>Ultimos Docunmentos Publicados</p>
                    <p className={classes.paragraph}><span>Group:</span> <b>Support</b></p>
                </section>
                {
                    ItemDocument.pages.map(item => (
                        <div className={classes.containerC}>
                            <p className={classes.contenthead}>{item.titulo}</p>
                            <section className={classes.content}>
                                <p className={classes.links}>View Details</p>
                                <span className={classes.page}>{item.pag}</span>
                            </section>
                        </div>
                    )
                    )
                }
            </div>

        </Theme>

    )
}
export default LastDocument