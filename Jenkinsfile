pipeline
{
    agent any
    tools {nodejs "node"}    
    stages
    {
        stage("build")
        {   
            steps
            {
                echo 'Comenzando la construcción de los artefactos'
                sh 'cd cliente'
                sh 'npm install' 
                sh 'npm build' 
                sh 'cd ../repartidor/'          
                sh 'npm install' 
                sh 'npm build' 
                sh 'cd ../restaurante/'          
                sh 'npm install' 
                sh 'npm build' 
                sh 'cd ../esb/'          
                sh 'npm install' 
                sh 'npm build' 
            }                        
        }

        stage("test")
        {
            steps
            {
                echo 'Realizando pruebas'            
            }            
        }

        stage("deploy")
        {
            steps
            {
                echo 'Comenzando el despliegue de los artefactos'
                sh 'mkdir release'
                sh 'tar cvfz release/cliente-beta.tar.gz cliente/'
                sh 'tar cvfz release/repartidor-beta.tar.gz repartidor/'
                sh 'tar cvfz release/restaurante-beta.tar.gz restaurante/'
                sh 'tar cvfz release/esb-beta.tar.gz esb/'
                sh 'tar cvfz release-beta.tar.gz release/'
            }
        }
    }
}