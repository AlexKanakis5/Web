# Προτείνω vscode για editor
# Αν χρησιμοποιείτε windows προτείνω να εγκαταστήσετε το "Windows Terminal" https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab


# Πως να τρέξετε τον server: 

1. Ανοίξτε το directory Node/NodeTest μέσω terminal 
2. npm install
3. nodemon app
4. Βάλτε τη διεύθυνση localhost:3000 στον browser (αυτό θα αλλάξει)

# Πώς να τρέξετε το vue app (μέσω cli-για development):

0. npm install -g @vue/cli (ως sudo για linux) (χρειάζεται να το κάνετε μόνο την πρώτη φορά, θα εγκατασταθεί στο pc σας)
1. Ανοίξτε το directory Node/router-test μέσω terminal
2. npm install
3. npm run serve
4. Βάλτε τη διεύθυνση localhost:8080 στον browser (αυτό θα αλλάξει)

# Πώς να τρέξετε το vue μέσω του server (production):
 
1. Ανοίξτε το directory Node/router-test μέσω terminal 
2. npm install (αν δεν το έχετε κάνει ήδη σε αυτό το directory-αν δεν έχετε φάκελο node_modules)
3. npm run build
4. Ανοίξτε το directory Node/NodeTest
5. npm install (αν δεν το έχετε κάνει ήδη σε αυτό το directory-αν δεν έχετε φάκελο node_modules)
6. nodemon app
7. Βάλτε τη διεύθυνση localhost:3000 στον browser (αυτό θα αλλάξει)
8. Αν βγάζει error τύπου 
    
        "events.js:174
        throw er; // Unhandled 'error' event"
    
    Δοκιμάστε 

        killall node
        nodemon app

9. Αν θέλετε να έχετε τον server ανοιχτό ενώ κάνετε αλλαγές στο Vue (router-test) τότε αντί για το βήμα 3 γράψτε

        npm run watch