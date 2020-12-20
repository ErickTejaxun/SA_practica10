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
                    sh 'npm install'                
                    sh 'npm start'
                }                                            
            }                        
        }
    }
}