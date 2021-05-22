pipeline {
    agent any
    tools {nodejs 'NodeJS'}
    stages {
        stage('Build') {
            steps {
                echo 'building'
                sh 'npm install'
            }
        }
                 stage('Test') {
             steps {
                echo 'Test'
                sh 'npm run test'
            }
        }
    }
}
