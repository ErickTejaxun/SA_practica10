pipeline
{
    agent any  
    stages
    {
        stage("Construcción de los artefactos")
        {   
            echo 'Estableciendo variables de entorno para pruebas'               
            sh 'export PORTCLIENTE=9000'                
            sh 'export PORTRESTAURANTE=9100'
            sh 'export PORTREPARTIDOR=9200'
            sh 'export PORTEBS=9300'            

            steps
            {                
                echo 'Pruebas de construcción de servicio cliente'
                dir("cliente") 
                {                    
                    sh 'npm install'                
                    sh 'npm start'
                }                            

                echo 'Pruebas de construcción de servicio esb'
                dir("esb") 
                {                    
                    sh 'npm install'                
                    sh 'npm start'
                }       

                echo 'Pruebas de construcción de servicio restaurante'
                dir("repartidor") 
                {                    
                    sh 'npm install'                
                    sh 'npm start'
                }              

                echo 'Pruebas de construcción de servicio repartidor'
                dir("repartidor") 
                {                    
                    sh 'npm install'                
                    sh 'npm start'
                }                                                                                            
            }                        

            sh 'forever stopall'
        }
    }
}