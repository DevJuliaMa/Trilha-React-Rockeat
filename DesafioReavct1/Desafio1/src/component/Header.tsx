import styles from './Header.module.css';

import Logo from '../img/Logo.svg';

import { AiOutlinePlusCircle } from 'react-icons/AI'

export function Header(){

    return (
        <>

            <header className={styles.header}>
        
               
           
                <div  className={styles.newTaref}>
                    <img src={Logo} alt="Logotipo do To Do" />
                    <input type="text" placeholder='Adicione uma nova tarefa' />
                    <button>Criar <AiOutlinePlusCircle className={styles.logoCircle} /> </button>

                </div>


            </header> 
            <main>
                
           
                
            </main>
      
        </>
        
    );
}