import Foundation

@objc(AppGroup)
class AppGroup: NSObject {

 @objc
 func constantsToExport() -> [AnyHashable : Any]! {
   var path = ""
   if let suiteName = Bundle.main.object(forInfoDictionaryKey: "AppGroup") as? String {
     if let directory = FileManager.default.containerURL(forSecurityApplicationGroupIdentifier: suiteName) {
       path = directory.path
     }
   }

   return ["path": "\(path)/"]
 }
}
