import unittest
import requests

class TestCareerPredictionAPI(unittest.TestCase):

    def test_prediction_success(self):
        payload = [1, 2, 3, 4, 5, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0]
        response = requests.post("http://127.0.0.1:8082/result", json=payload)
        
        # Assert that the response code is 200
        self.assertEqual(response.status_code, 200)

    def test_invalid_input(self):
        payload = [1]  # Invalid input (less than 17 values)
        response = requests.post("http://127.0.0.1:8082/result", json=payload)
        
        # Assert that the response code is 400 for invalid input
        self.assertEqual(response.status_code, 400)

    def test_other_conditions(self):
        # Add more tests as needed
        pass

if __name__ == '__main__':
    unittest.main()
