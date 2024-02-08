import React from 'react'

const SizeModal = () => {
  return (
    <>
          <div className="super_main_guide">
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal3"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg ">
            <div className="modal-content">
              <div className="modal-header">
                {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div>
                  <h3 className="text-center mb-3">Size Guide</h3>
                  <div>
                    {/* ---tab-S-- */}
                    <div>
                      <ul className="size_guide_ul" id="myTab" role="tablist">
                        <li role="presentation">
                          <span
                          
                            className="active"
                            id="dresses-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#dresses"
                            type="button"
                            role="tab"
                            aria-controls="dresses"
                            aria-selected="true"
                          
                          >
                            MEN
                          </span>
                        </li>
                        <li role="presentation">
                          <span

                            id="tshirt-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#tshirt"
                            type="button"
                            role="tab"
                            aria-controls="tshirt"
                            aria-selected="false"
                     
                          >
                            WOMEN
                          </span>
                        </li>
                        <li role="presentation">
                          <span
                        
                            id="bottoms-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#bottoms"
                            type="button"
                            role="tab"
                            aria-controls="bottoms"
                            aria-selected="false"
                        

                          >
                            KIDS
                          </span>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="dresses"
                          role="tabpanel"
                          aria-labelledby="dresses-tab"
                        >
                          <div>
                            <table className="table table_main__">
                              <thead>
                                <tr>
                                  <th>SIZE</th>
                                  <th>CHEST</th>
                                  <th>WAIST</th>
                                  <th>HIPS</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>XS</td>
                                  <td>34</td>
                                  <td>28</td>
                                  <td>34</td>
                                </tr>
                                <tr>
                                  <td>S</td>
                                  <td>36</td>
                                  <td>30</td>
                                  <td>36</td>
                                </tr>
                                <tr>
                                  <td>M</td>
                                  <td>38</td>
                                  <td>32</td>
                                  <td>38</td>
                                </tr>
                                <tr>
                                  <td>L</td>
                                  <td>40</td>
                                  <td>34</td>
                                  <td>40</td>
                                </tr>
                                <tr>
                                  <td>XL</td>
                                  <td>42</td>
                                  <td>36</td>
                                  <td>42</td>
                                </tr>
                                <tr>
                                  <td>2XL</td>
                                  <td>44</td>
                                  <td>38</td>
                                  <td>44</td>
                                </tr>
                                <tr>
                                  <td colSpan={4} className="last_td_main">
                                    <div>
                                      <p className="measure">
                                        All measurements are in INCHES
                                      </p>
                                      <p className="measure">
                                        and may vary a half inch in either
                                        direction.
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="tshirt"
                          role="tabpanel"
                          aria-labelledby="tshirt-tab"
                        >
                          <div>
                            <table className="table table_main__">
                              <thead>
                                <tr>
                                  <th>SIZE</th>
                                  <th>CHEST</th>
                                  <th>WAIST</th>
                                  <th>HIPS</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>2XS</td>
                                  <td>32</td>
                                  <td>26</td>
                                  <td>32</td>
                                </tr>
                                <tr>
                                  <td>XS</td>
                                  <td>34</td>
                                  <td>28</td>
                                  <td>34</td>
                                </tr>
                                <tr>
                                  <td>S</td>
                                  <td>36</td>
                                  <td>30</td>
                                  <td>36</td>
                                </tr>
                                <tr>
                                  <td>M</td>
                                  <td>38</td>
                                  <td>32</td>
                                  <td>38</td>
                                </tr>
                                <tr>
                                  <td>L</td>
                                  <td>40</td>
                                  <td>34</td>
                                  <td>40</td>
                                </tr>
                                <tr>
                                  <td>XL</td>
                                  <td>42</td>
                                  <td>36</td>
                                  <td>42</td>
                                </tr>
                                <tr>
                                  <td colSpan={4} className="last_td_main">
                                    <div>
                                      <p className="measure">
                                        All measurements are in INCHES
                                      </p>
                                      <p className="measure">
                                        and may vary a half inch in either
                                        direction.
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="bottoms"
                          role="tabpanel"
                          aria-labelledby="bottoms-tab"
                        >
                          <div>
                            <table className="table table_main__">
                              <thead>
                                <tr>
                                  <th>SIZE</th>
                                  <th>CHEST</th>
                                  <th>WAIST</th>
                                  <th>HIPS</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>XS</td>
                                  <td>34</td>
                                  <td>28</td>
                                  <td>34</td>
                                </tr>
                                <tr>
                                  <td>S</td>
                                  <td>36</td>
                                  <td>30</td>
                                  <td>36</td>
                                </tr>
                                <tr>
                                  <td>M</td>
                                  <td>38</td>
                                  <td>32</td>
                                  <td>38</td>
                                </tr>
                                <tr>
                                  <td>L</td>
                                  <td>40</td>
                                  <td>34</td>
                                  <td>40</td>
                                </tr>
                                <tr>
                                  <td>XL</td>
                                  <td>42</td>
                                  <td>36</td>
                                  <td>42</td>
                                </tr>
                                <tr>
                                  <td>2XL</td>
                                  <td>44</td>
                                  <td>38</td>
                                  <td>44</td>
                                </tr>
                                <tr>
                                  <td colSpan={4} className="last_td_main">
                                    <div>
                                      <p className="measure">
                                        All measurements are in INCHES
                                      </p>
                                      <p className="measure">
                                        and may vary a half inch in either
                                        direction.
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SizeModal