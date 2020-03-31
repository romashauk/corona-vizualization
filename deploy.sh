. sharedFuncs.sh

namespace="default"
versionFile="productionVersion.txt"
appName="covid"
stage="production"
serviceName="covid"
historyFile="productionHistory"

deployImage $namespace $versionFile $appName $stage $serviceName $historyFile 


