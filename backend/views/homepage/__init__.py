from flask import render_template
from flask_classful import FlaskView


class HomepageView(FlaskView):
    
    decorators = [ ]

    def get(self):
        return render_template('reference.jinja2')
