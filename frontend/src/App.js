import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Producto from './components/Producto';
import Background from './stock-1863880_1920.jpg';
import ContainerList from './components/ContainerList';

const styles = {
  containerP: {display: 'flex', justifyContent:'center', height: '100vh'},
  containerS: {textAlign: 'center', height: '100%', width:'100%'},
  containerL: {width: '30%', height: '100%', display: 'inline-block' },
  containerR: {width: '70%', height: '100%', backgroundImage: `url(${Background})`, display: 'inline-block', backgroundSize: 'cover'},
  containerLis: {width: '100%', height: '100%', backgroundColor: '#00000099' },
}

function App() {
  return (
   <section style={styles.containerP}>
     <section style={styles.containerS}>
       <div style={styles.containerL}>
        <Producto />
       </div>
       <div style={styles.containerR}>
          <div style={styles.containerLis}>
            <ContainerList />
          </div>
       </div>
     </section>
   </section>
  );
}

export default App;
