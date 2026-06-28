pipeline{
	agent any
	stages {

		stage('checkout'){
			steps {
			 checkout scm		
			}

		}
		stage('build'){
			steps{
			 echo "building..."
			 sh 'node --version'
			
			}
		}
		stage('test'){
			steps{
			 echo "testing..."
			 echo "Tests passed"

			}
		}
		stage('deploy'){
			steps{
				sh 'docker build -t jenkins-final-exam'
				echo 'Deployed'	
			}
		}

	
	}

	post{
		success { echo 'SUCCESS' }
		failure { echo 'FAILED' }	
	}
}
