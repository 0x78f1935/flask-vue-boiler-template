class ViewManager(object):
    """
    This class is a representation of any router 'class'.
    It just registers all views listed in the self.register method.
    """
    def __init__(self, server) -> None:
        super().__init__()
        self.server = server
    
    def register(self) -> None:
        """
        This method register the views to the server object.
        """
        from backend.views.homepage import HomepageView
        HomepageView.register(self.server, route_base='/')

        from backend.views.testpage import TestpageView
        TestpageView.register(self.server, route_base='/test')
