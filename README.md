Features:  
  
-When blocking a website, it is replaced by chrome's 'ERR_DNS_TIMED_OUT' error message, making the victim... er, I mean user, think the website is broken.  
-Can be enabled/disabled via the options menu  
-The websties to be blocked are configurable via the options menu (must be in the form of a json array)  
-The options menu on the options page is hidden by default, and must be toggled by pressing the 'z' and 'i' key at the same time.  
-The save button will not actually save the settings if the 'q' and 'm' keys are pressed. You will know if is has saved if the page says 'Saved.' and not 'Saved'  
-After installing or wiping the local storage, default values are restored upon loading the options page.  
  
Installation Process:  
  
1. Download the .zip file of this reopsitory.  
2. Unzip the package.  
3. Move the folder inside the unzipped package and move it somewhere suitable, such as somewhere in the documents folder, or even in the AppData folder.  
4. Remove the original .zip file and the outer folder of the unzipped package.
5. Remove README.md from the folder, since the folder location can still be found via the extensions menu.
6. Go to chrome://extensions and turn on developer mode in the top right corner.  
7. Press 'Load Unpacked' in the top left corner and select the 'UBlock Adblocker'folder you have moved to some location.  
8. Press 'Details' on 'UBlock Adblocker' and turn on 'Allow in Incognito'.  
9. Press 'Extension Options' to open the options page and press 'z' and 'i' at the same time.  
10. Type in the list of blocked terms (if a url contains an item in the list, it will be blocked) in the form of a json array.  
11. Click 'Save' while holding down the 'q' and 'z' keys. The website should say 'Saved.' and not 'Saved'.  
12. Remove all traces of the installation, such as the extensions tab, history, and download history.  
