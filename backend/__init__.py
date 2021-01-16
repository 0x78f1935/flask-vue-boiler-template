from flask import Flask

import pathlib

from backend.config import Configuration
from backend.views import ViewManager


class Webserver(object):
    def __init__(self) -> None:
        self.server = Flask(__name__)
        self.server.config.from_object(Configuration())
    
    def _start_server(self) -> object:
        self.__setup_views()
        self.__setup_jinja()
        self.__webpack_to_jinja()
        return self.server

    def __setup_views(self) -> None:
        ViewManager(self.server).register()

    def __setup_jinja(self) -> None:
        """
        Updates jinja with custom functions.
        Each function will be callable within the jinja renderer.
        """
        from backend.views.jinja import CustomFunctions
        self.server.jinja_env.globals.update(
            datenow=CustomFunctions.datenow,
            get_version_number=CustomFunctions.get_version_number,
        )

    def __webpack_to_jinja(self):
        """Intergrate webpack into jinja2 render template"""
        from jinja2_webpack import Environment as WebpackEnvironment
        from jinja2_webpack.filter import WebpackFilter

        try: # Time to load in NPM manifest
            manifest = self._get_pathlib('static', 'vue', 'manifest.json')
            if not manifest.is_file():
                with open(str(manifest), 'w') as f: f.write("{}")
            webpack_env = WebpackEnvironment(manifest=str(pathlib.PurePosixPath(manifest)), publicRoot='')
            self.server.jinja_env.filters['webpack'] = WebpackFilter(webpack_env)
        except FileNotFoundError: raise FileNotFoundError('The frontend needs to be compiled first')

    def _get_pathlib(self, *args):
        return pathlib.Path(pathlib.Path(__file__).resolve().parent, *args)