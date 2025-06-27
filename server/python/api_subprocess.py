import subprocess

script_path = "api_call.py"
def run_python_script(script_path):
    result = subprocess.run(["python", script_path], capture_output=True)
    return result.stdout