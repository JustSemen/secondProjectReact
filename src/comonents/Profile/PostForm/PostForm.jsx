import React from 'react';
import MyButton from "../../UI/MyButton/MyButton";
import MyInput from '../../UI/MyInput/MyInput';
import style from './PostForm.module.css';

const PostForm = ({ onCreatePost, onChangePostText, onChangePostTitle, profilePage, ...props }) => {
    /* const [title, setUsername] = useState('')
    const [body, setMessage] = useState('')
    const keyMessages = {
        'привет, вероника': `Привет, ${title}!`,
        'который час?': getTime(),
        'сколько будет': veronikaCalc(body) /* Калькулятор однозначных чисел 
    } */

    /* function veronikaCalc(string) {
        let arrayOfNumbers = []
        if (string.search(/\d/) != -1) {
            for (let i = 0; i < string.length; i++) {
                for (let j = 0; j < 10; j++) {
                    if (string[i] == j) arrayOfNumbers.push(string[i])
                }
            }
        }

        let result = 0
        arrayOfNumbers.forEach((number) => {
            result += Number(number)
        })

        return `Результат сложения ваших однозначных чисел равен ${result}`
    }

    function getTime() {
        let date = new Date
        return (`Сейчас ${date.getHours()}`)
    }

    function createPost(e) {
        dispatch()
    }

    useEffect(() => {
        for (let keyMessage in keyMessages) {
            if (body.toLocaleLowerCase().includes(keyMessage)) {
                const botMessage = {
                    id: Date.now(),
                    avatar: veronika,
                    title: 'Вероника',
                    body: keyMessages[keyMessage]
                }
                if (body.includes('сколько будет')) {
                    veronikaCalc(body)
                }
                setPost([...posts, botMessage])
            }
        }

        setUsername('')
        setMessage('')
    }, [posts]) */

    return (
        <div className={style.newPost}>
            <MyInput
                value={profilePage.newPostTitleText}
                onChange={e => onChangePostTitle(e.target.value)}
                placeholder='Ваше имя'
            />
            <textarea className={style.textarea} value={profilePage.newPostText} placeholder="Новый пост" cols="100" rows="4" onChange={e => onChangePostText(e.target.value)} />
            <div>
                <MyButton onClick={onCreatePost}>Создать пост</MyButton>
            </div>
        </div>
    );
};

export default PostForm;