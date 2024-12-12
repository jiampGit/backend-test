pipeline{
    agent any
    stages{
        stage("Instalación de dependencias"){
            agent {
                docker {
                    image 'node:22-alpine'
                    reuseNode true
                }
            }
            stages{
                stage ("Build - instalación dependencias"){
                    steps{
                        sh 'npm install'
                    }
                }
                stage("Testing"){
                    steps{
                        sh 'npm run test'
                    }
                }
                stage("Build del proyecto"){
                    steps{
                        sh 'npm run build'
                    }
                }
            }            
        }
        stage("imagen a nexus"){
            steps{
                sh 'docker build -t backend-test .'
                sh 'docker tag backend-test localhost:8082/backend-test'
                sh 'docker tag backend-test localhost:8082/backend-test'
            }
        }     
    }
}
