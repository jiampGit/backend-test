pipeline{
    agent any
    stages{
        }
        stage("Instalación de dependencias"){
            steps{
                sh 'npm install'
            }
        }
        stage("Build del proyecto"){
            steps{
                sh 'npm run build'
            }
        }
}
