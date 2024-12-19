import { Container } from "../../../shared/components"
import { PlusIcon } from "../../../shared/icons/FooterIcon"

import book_1 from "../../../shared/assets/book_1.jpg"

import styles from "./list.module.scss"
import { FC } from "react"

type UsersBooksChatListProps = {
    isClouse: boolean
    changeShowBooks: () => void
}

export const UsersBooksChatList:FC<UsersBooksChatListProps> = ({isClouse, changeShowBooks}) => {
    return (
        <>
         {
            isClouse ? 
            <>
            <div className={styles.overvy}>
            <Container>
                <div className={styles.list}>
                    <div className={styles.clouse} onClick={() => changeShowBooks()}>
                        <PlusIcon />
                    </div>
                    <div className={styles.book}>
                        <div className={styles.img}>
                            <img src={book_1} alt="book" />
                        </div>

                        <div className={styles.descr}>
                            <div>
                                <h3 className={styles.title}>Скажи жизни да</h3>
                                <p className={styles.author}>В.Э. Франклин</p>
                            </div>
                            <div className={styles.genre}>психология</div>
                            <p className={styles.text}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facere distinctio veritatis quibusdam alias ab ratione, iure beatae voluptatum amet temporibus non sapiente debitis, hic ad repellendus saepe, praesentium officiis!
                            </p>
                        </div>
                    </div>
                    <div className={styles.book}>
                        <div className={styles.img}>
                            <img src={book_1} alt="book" />
                        </div>

                        <div className={styles.descr}>
                            <div>
                                <h3 className={styles.title}>Скажи жизни да</h3>
                                <p className={styles.author}>В.Э. Франклин</p>
                            </div>
                            <div className={styles.genre}>психология</div>
                            <p className={styles.text}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facere distinctio veritatis quibusdam alias ab ratione, iure beatae voluptatum amet temporibus non sapiente debitis, hic ad repellendus saepe, praesentium officiis!
                            </p>
                        </div>
                    </div>
                    <div className={styles.book}>
                        <div className={styles.img}>
                            <img src={book_1} alt="book" />
                        </div>

                        <div className={styles.descr}>
                            <div>
                                <h3 className={styles.title}>Скажи жизни да</h3>
                                <p className={styles.author}>В.Э. Франклин</p>
                            </div>
                            <div className={styles.genre}>психология</div>
                            <p className={styles.text}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facere distinctio veritatis quibusdam alias ab ratione, iure beatae voluptatum amet temporibus non sapiente debitis, hic ad repellendus saepe, praesentium officiis!
                            </p>
                        </div>
                    </div>
                    <div className={styles.book}>
                        <div className={styles.img}>
                            <img src={book_1} alt="book" />
                        </div>

                        <div className={styles.descr}>
                            <div>
                                <h3 className={styles.title}>Скажи жизни да</h3>
                                <p className={styles.author}>В.Э. Франклин</p>
                            </div>
                            <div className={styles.genre}>психология</div>
                            <p className={styles.text}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facere distinctio veritatis quibusdam alias ab ratione, iure beatae voluptatum amet temporibus non sapiente debitis, hic ad repellendus saepe, praesentium officiis!
                            </p>
                        </div>
                    </div>
                    <div className={styles.book}>
                        <div className={styles.img}>
                            <img src={book_1} alt="book" />
                        </div>

                        <div className={styles.descr}>
                            <div>
                                <h3 className={styles.title}>Скажи жизни да</h3>
                                <p className={styles.author}>В.Э. Франклин</p>
                            </div>
                            <div className={styles.genre}>психология</div>
                            <p className={styles.text}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facere distinctio veritatis quibusdam alias ab ratione, iure beatae voluptatum amet temporibus non sapiente debitis, hic ad repellendus saepe, praesentium officiis!
                            </p>
                        </div>
                    </div>
                </div>
       
            </Container>
        </div>
            </> 
            : null
        }
        </>
       
        
    )
}