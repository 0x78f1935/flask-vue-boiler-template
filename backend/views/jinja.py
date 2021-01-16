from flask import current_app
from datetime import datetime

class CustomFunctions(object):

    @staticmethod
    def datenow():
        """
        Returns
        -------
        Object: Datetime
            utcnow()
        """
        return datetime.utcnow()
    
    @staticmethod
    def get_version_number():
        """
        Returns
        -------
        String: version number
        """
        return current_app.config["VERSION"]