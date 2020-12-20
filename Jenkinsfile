pipeline
{
    agent any  
    stages
    {
        stage("Construcción de los artefactos")
        {   
            steps
            {
                echo 'Comenzando la construcción de los artefactos'
                dir("cliente") 
                {
                    sh 'export PORTCLIENTE=9000'
                    sh 'npm install'                
                    sh 'npm start'
                }                                            
            }                        
        }
    }
}