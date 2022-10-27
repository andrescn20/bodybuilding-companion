import './App.css';
import { Table } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Table
        striped='columns/'
        bordered
        hover
        size='sm'
        variant='dark'
        responsive
      >
        <thead>
          <th colSpan={4}> Rutina Isaac</th>
        </thead>
        <tbody>
          <tr>
            <th colSpan={4}>Dia 1: Tren Superior</th>
          </tr>
          <tr>
            <th>Set</th>
            <th>Ejercicio</th>
            <th>Sets</th>
            <th>Reps</th>
          </tr>
          <tr>
            <td rowSpan={2}>1</td>
            <td>Press Banca</td>
            <td>3</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Remo Mancuerna</td>
            <td>3</td>
            <td>12</td>
          </tr>
          <tr>
            <td rowSpan={2}>2</td>
            <td>Press Inclinado Mancuerna</td>
            <td>3</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Lat Pull Down Polea</td>
            <td>3</td>
            <td>12</td>
          </tr>
          <tr>
            <td rowSpan={2}>3</td>
            <td>Curl Biceps Barra Z**</td>
            <td>3</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Extensión Triceps Acostado Mancuerna**</td>
            <td>3</td>
            <td>12</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Press Militar Mancuerna</td>
            <td>3</td>
            <td>12</td>
          </tr>
          <tr>
            <th colSpan={4}>Dia 2: Tren Inferior</th>
          </tr>
          <tr>
            <th>Set</th>
            <th>Ejercicio</th>
            <th>Sets</th>
            <th>Reps</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Back Squat</td>
            <td>3</td>
            <td>8</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Desplantes Mancuerna</td>
            <td>3</td>
            <td>12</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Extensión Rodilla</td>
            <td>3</td>
            <td>12</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Deadlift</td>
            <td>3</td>
            <td>12</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Flexión Rodilla</td>
            <td>3</td>
            <td>8</td>
          </tr>
          <tr>
            <td>6</td>
            <td>¿Pantorrilla?</td>
            <td>3</td>
            <td>20</td>
          </tr>
          <tr>
            <th colSpan={4}>Dia 3: HIIT</th>
          </tr>
          <tr>
            <th>Set</th>
            <th>Ejercicio</th>
            <th colSpan={2}>Reps</th>
          </tr>
          <tr>
            <td>1</td>
            <td>KettleBell Swings</td>
            <td colSpan={2}>10</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Cleand and Jerks Individual</td>
            <td colSpan={2}>5/lado</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Snatches</td>
            <td colSpan={2}>5/lado</td>
          </tr>
          <tr>
            <td>Intercalado</td>
            <td>Sombra Boxeo</td>
            <td colSpan={2}>30s</td>
          </tr>
          <tr>
            <td> Instrucciones </td>
            <td colSpan={3}>
              {' '}
              Hace los 3 ejercicios intercalados con sombra. Descansa 3min.
              Repite 3 veces{' '}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
