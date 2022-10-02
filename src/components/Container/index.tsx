import { useState } from 'react';
import styles from './styles.module.css';
import { levels, calculateImc, Level } from '../../helpers/imc';
import { GridItem } from '../GridItem';
import leftArrowImage from '../../assets/leftarrow.png';

export const Container = () => {
    const [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);
    const [toShow, setToShow] = useState<Level | null>(null)

    const handleCalculateButton = () => {
        if (heightField && weightField) {
            setToShow(calculateImc(heightField, weightField));
        } else {
            alert('Digite todos os campos');
        }
    }

    const handleBackButton = () => {
        setToShow(null);
        setHeightField(0);
        setWeightField(0);
    }
    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <h1>Calcule seu IMC.</h1>
                <p>IMC é a sigla para Índice de massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
                <input
                    type="number"
                    placeholder="Digite a sual altua. Ex: 1.5 (em metros)"
                    value={heightField > 0 ? heightField : ''}
                    onChange={e => setHeightField(parseFloat(e.target.value))}
                    disabled={toShow ? true : false}
                />
                <input
                    type="number"
                    placeholder="Digite o seu peso. Ex: 75.3 (em Kilogramas)"
                    value={weightField > 0 ? weightField : ''}
                    onChange={e => setWeightField(parseFloat(e.target.value))}
                    disabled={toShow ? true : false}
                />
                <button onClick={handleCalculateButton} disabled={toShow ? true : false}> Calcular  </button>
            </div>
            <div className={styles.rightSide}>
                {!toShow &&
                    <div className={styles.grid}>
                        {levels.map((item, key) => (
                            <GridItem key={key} item={item} />
                        ))}
                    </div>
                }
                {toShow &&
                    <div className={styles.rightBig}>
                        <div className={styles.rightArrow} onClick={handleBackButton}>
                            <img src={leftArrowImage} alt='' width='25' />
                        </div>
                        <GridItem item={toShow} />
                    </div>
                }
            </div>
        </div>
    );
}