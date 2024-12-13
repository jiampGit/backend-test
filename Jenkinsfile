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
        stage("Puerta Calidad - SonarQube"){
            agent {
                docker {
                    label 'contenedores'
                    image 'sonarsource/sonar-scanner-cli'
                    reuseNode true
                }
            }
            stages() {
                stage("Quality assurance"){
                    steps{
                        withSonarQubeEnv('sonarqube'){
                            sh 'sonar-scanner'
                        }
                    }
                }
            }
        }
        stage("imagen a nexus"){
            steps{
                script(){
                    docker.withRegistry("http://localhost:8082", "registry"){
                        sh 'docker build -t backend-test .'
                        sh 'docker tag backend-test localhost:8082/backend-test'
                        sh 'docker tag backend-test localhost:8082/backend-test'
                    }
                }                
            }
        }     
    }
}
