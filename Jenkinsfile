node {
    stage('get code from github'){
        git(
           url: 'https://github.com/brandonvio/fuzzle-app',
           credentialsId: 'aa1cfaef-9e77-4449-9208-43d6f6a8de44',
           branch: "master"
        )
    }
    stage("APP"){
        stage('build'){
            sh "npm install"
            sh "npm run-script build"                
        }
        stage('deploy'){            
            sh "aws s3 sync build/ s3://origin.trackerp.xyz --acl public-read"
            sh 'aws cloudfront create-invalidation --distribution-id E26NHRKWDSAWLX --paths "/*"'
        }
    }
}